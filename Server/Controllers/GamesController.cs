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

        [HttpGet("byCode/{gameCodeFromClient}")]
        public async Task<IActionResult> GetGameByCode(int gameCodeFromClient)
        {
            Game gameFromDB = await _context.Games.Include(gq => gq.GameQuestions).ThenInclude(qd => qd.QuestionDistractors).FirstOrDefaultAsync(g => g.GameCode == gameCodeFromClient);
            if(gameFromDB != null)
            {
                if(gameFromDB.IsPublish == true)
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

        //קוד משחק

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
        //שמירת תמונה
        [HttpPost("upload")]
        public async Task<IActionResult> UploadFile([FromBody] string imageBase64)
        {
            byte[] picture = Convert.FromBase64String(imageBase64);
            string url = await _fileStorage.SaveFile(picture, "png", "uploadedFiles");
            return Ok(url);
        }

    }
}
