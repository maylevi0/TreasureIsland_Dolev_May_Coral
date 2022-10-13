using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TreasureIsland_Dolev_May_Coral.Server.Data;
using TreasureIsland_Dolev_May_Coral.Shared.Entities;

namespace TreasureIsland_Dolev_May_Coral.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly DataContext _context;
        public QuestionsController(DataContext context)
        {
            _context = context;
        }




        [HttpGet("editQ/{QuestionID}")]
        public async Task<IActionResult> GetQuestion(int QuestionID)
        {
            Question QFromDB = await _context.Questions.Include(q => q.QuestionDistractors).FirstOrDefaultAsync(q => q.ID == QuestionID);
            if (QFromDB != null)
            {
                return Ok(QFromDB);
            }
            else
            {
                return BadRequest("Question not found");
            }
        }

        [HttpPost("SaveQuestion")]
        public async Task<IActionResult> SaveQuestion(Question QuestionFromUser)
        {
            Game GameFromDB = await _context.Games.Include(g => g.GameQuestions).Where(g => g.ID == QuestionFromUser.GameID).FirstOrDefaultAsync();
            if (GameFromDB != null)
            {
                Question QuestionFromDB = GameFromDB.GameQuestions.Where(q => q.ID == QuestionFromUser.ID).FirstOrDefault();
                if (QuestionFromDB == null)
                {
                    GameFromDB.GameQuestions.Add(QuestionFromUser);
                }
                else
                {
                    QuestionFromDB.QuestionTitle = QuestionFromUser.QuestionTitle;
                    QuestionFromDB.QuestionImage = QuestionFromUser.QuestionImage;
                    QuestionFromDB.QuestionDistractors = QuestionFromUser.QuestionDistractors;
                }
                await _context.SaveChangesAsync();
                return Ok(QuestionFromUser);
            }
            else
            {
                return BadRequest("game wasnt found");
            }
        }



        [HttpDelete("{questionID}")]
        public async Task<IActionResult> DeleteQ(int questionID)
        {
            Console.WriteLine("Qid in controller:" + questionID);
            Question QuestionFromDB = await _context.Questions.FirstOrDefaultAsync(q => q.ID == questionID);
            if (QuestionFromDB != null)
            {
                Console.WriteLine("not null");
                _context.Questions.Remove(QuestionFromDB);
                await _context.SaveChangesAsync();
                return Ok(true);
            }
            else
            {

                return BadRequest("no such game...");
            }
        }



        [HttpDelete("{userID}/{questionID}")]
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
