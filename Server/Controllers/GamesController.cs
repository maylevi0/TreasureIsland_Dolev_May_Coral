using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TreasureIsland_Dolev_May_Coral.Shared.Entities;
using TreasureIsland_Dolev_May_Coral.Server.Data;

namespace TreasureIsland_Dolev_May_Coral.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly DataContext _context;

        public GamesController(DataContext context)
        {
            _context = context;
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
    }
}
