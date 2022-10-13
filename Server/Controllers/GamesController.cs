using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TreasureIsland_Dolev_May_Coral.Shared.Entities;
using TreasureIsland_Dolev_May_Coral.Server.Data;
using TreasureIsland_Dolev_May_Coral.Server.Helpers;

namespace TreasureIsland_Dolev_May_Coral.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly FileStorage _fileStorage;

        public GamesController(DataContext context, FileStorage fileStorage)
        {
            _context = context;
            _fileStorage = fileStorage;
        }


        //בדיקה התחברות משתמש
        [HttpGet("{userIdClient}")]
        public async Task<IActionResult> GetAllGames(int userIdClient)
        {
            string sessionContent = HttpContext.Session.GetString("UserId");
            if (string.IsNullOrEmpty(sessionContent) == false)
            {
                int sessionId = Convert.ToInt32(sessionContent);
                if (sessionId == userIdClient)
                {
                    User userToReturn = await _context.Users.Include(u => u.UserGames).ThenInclude(g => g.GameQuestions).FirstOrDefaultAsync(u => u.ID == userIdClient);
                    if (userToReturn != null)
                    {
                        return Ok(userToReturn);
                    }
                    return BadRequest("User not found");
                }
                return BadRequest("User not login");
            }
            return BadRequest("Empty session");
        }

        //פרסום משחק עדכון (לא יצירת משחק)
        [HttpPost("Update/Publish")]
        public async Task<IActionResult> UpdateGame(Game GameToUpdate)
        {
            Game Game = await _context.Games.FirstOrDefaultAsync(w => w.ID == GameToUpdate.ID);

            if (Game != null)
            {

                Game.IsPublish = GameToUpdate.IsPublish;
                await _context.SaveChangesAsync();
                return Ok(Game);
            }
            else
            {
                return BadRequest("לא פורסם");
            }
        }


        //עדכון שם המשחק וזמן המשחק
        [HttpPost("Update/GameUpdate")]
        public async Task<IActionResult> GameUpdate(Game GameToUpdate)
        {
            Game Game = await _context.Games.FirstOrDefaultAsync(w => w.ID == GameToUpdate.ID);

            if (Game != null)
            {

                Game.GameName = GameToUpdate.GameName;
                Game.QTimeLimit = GameToUpdate.QTimeLimit;
                await _context.SaveChangesAsync();
                return Ok(Game);
            }
            else
            {
                return BadRequest("לא פורסם");
            }
        }


        //שליפת משחק על פי קוד
        [HttpGet("byCode/{gameCodeFromClient}")]
        public async Task<IActionResult> GetGameByCode(int gameCodeFromClient)
        {
            Game gameFromDB = await _context.Games.Include(gq => gq.GameQuestions).ThenInclude(qd => qd.QuestionDistractors).FirstOrDefaultAsync(g => g.GameCode == gameCodeFromClient);
            if (gameFromDB != null)
            {
                if (gameFromDB.IsPublish == true)
                {
                    return Ok(gameFromDB);
                }
                else
                {
                    return BadRequest("Game not publish");
                }


            }
            else
            {
                return BadRequest("Game not found");
            }
        }

        // שליפת תוכן משחק מכפתור עריכה

        [HttpGet("bygameID/{gameId}")]
        public async Task<IActionResult> GetgamecontentbyId(int gameId)
        {
            Game gameFromDB = await _context.Games.Include(g => g.GameQuestions).ThenInclude(q => q.QuestionDistractors).FirstOrDefaultAsync(g => g.ID == gameId);
            if (gameFromDB != null)
            {
                return Ok(gameFromDB);
            }
            else
            {
                return BadRequest("Game not found");
            }
        }

        //קוד משחק יצירת משחק חדש

        [HttpPost]
        public async Task<IActionResult> AddGame(Game gameToAdd)
        {
            string sessionContent = HttpContext.Session.GetString("UserId");
            if (string.IsNullOrEmpty(sessionContent) == false)
            {
                int SessionID = Convert.ToInt32(sessionContent);
                if (SessionID == gameToAdd.UserID)
                {
                    User UserFromDB = await _context.Users.Include(u => u.UserGames).FirstOrDefaultAsync(u => u.ID == gameToAdd.UserID);
                    if (UserFromDB != null)
                    {
                        UserFromDB.UserGames.Add(gameToAdd);
                        await _context.SaveChangesAsync();
                        //יצירת קוד המשחק
                        //שימו לב! בשלב זה המשתנה
                        //gameToAdd
                        //מסונכרן עם בסיס הנתונים ויש למשחק
                        //ID
                        gameToAdd.GameCode = gameToAdd.ID + 1000;
                        await _context.SaveChangesAsync();
                        return Ok(gameToAdd);
                    }
                    else
                    {
                        return BadRequest("user not found");
                    }
                }
                else
                {
                    return BadRequest("user not login");
                }
            }
            else
            {
                return BadRequest("empty Session");
            }
        }

        //מחיקת משחק

        [HttpDelete("{userID}/{gameID}")]
        public async Task<IActionResult> DeleteGame(int userID, int gameID)
        {
            string sessionContent = HttpContext.Session.GetString("UserId");
            if (string.IsNullOrEmpty(sessionContent) == false)
            {
                int sessionId = Convert.ToInt32(sessionContent);

                if (sessionId == userID)
                {
                    Game GameFromDB = await _context.Games.FirstOrDefaultAsync(g => g.ID == gameID);
                    if (GameFromDB != null)
                    {
                        _context.Games.Remove(GameFromDB);
                        await _context.SaveChangesAsync();
                        return Ok(true);
                    }
                    return BadRequest("no such game...");
                }
                return BadRequest("User not login");
            }
            return BadRequest("Empty session");
        }

        //שמירת תמונה
        [HttpPost("upload")]
        public async Task<IActionResult> UploadFile([FromBody] string imageBase64)
        {
            byte[] picture = Convert.FromBase64String(imageBase64);
            string url = await _fileStorage.SaveFile(picture, "png", "uploadedFiles");
            return Ok(url);
        }

            //מחיקת תמונה
            [HttpPost("deleteImages")]
            public async Task<IActionResult> DeleteImages([FromBody] List<string> images)
            {
                foreach (string img in images)
                {
                    await _fileStorage.DeleteFile(img, "uploadedFiles");
                }
                return Ok("deleted");
            }



        // הוספת שאלות עריכה ועדכון
        [HttpPost("editQuestion/{userID}/{gameId}")]
        public async Task<IActionResult> EditContent(Question QuestionToUpdate, int userID, int gameID)
        {
            
            string sessionContent = HttpContext.Session.GetString("UserId");

            if (string.IsNullOrEmpty(sessionContent) == false)
            { 
                int sessionId = Convert.ToInt32(sessionContent);
                if (sessionId == userID)
                {

                    if (QuestionToUpdate.GameID == 0)
                    {

                        QuestionToUpdate.GameID = gameID;
                        _context.Questions.Add(QuestionToUpdate);
                        await _context.SaveChangesAsync();
                        return Ok(QuestionToUpdate);
                    }

                    Question questionFromDB = await _context.Questions.FirstOrDefaultAsync(q => q.ID == QuestionToUpdate.ID);

                    if (questionFromDB != null)
                    {
                        
                        questionFromDB.QuestionTitle = QuestionToUpdate.QuestionTitle;
                        questionFromDB.QuestionImage = QuestionToUpdate.QuestionImage;
                        questionFromDB.QuestionDistractors = QuestionToUpdate.QuestionDistractors;

                        await _context.SaveChangesAsync();
                        return Ok(questionFromDB);
                    }
                    else
                    {
                        return BadRequest("no game found");
                    }
                }
                else
                {
                    return BadRequest("User not login");
                }
            }
            else
            {
                return BadRequest("Empty session");
            }

        }


        [HttpDelete("DeleteQ/{userID}/{questionID}")]
        public async Task<IActionResult> DeleteQ(int userID, int questionID)
        {
            string sessionContent = HttpContext.Session.GetString("UserId");
            if (string.IsNullOrEmpty(sessionContent) == false)
            {
                int sessionId = Convert.ToInt32(sessionContent);

                if (sessionId == userID)
                {
                    Question QuestionFromDB = await _context.Questions.FirstOrDefaultAsync(q => q.ID == questionID);
                    if (QuestionFromDB != null)
                    {
                        _context.Questions.Remove(QuestionFromDB);
                        await _context.SaveChangesAsync();
                        return Ok(true);
                    }
                    return BadRequest("no such game...");
                }
                return BadRequest("User not login");
            }
            return BadRequest("Empty session");
        }





    }   
}