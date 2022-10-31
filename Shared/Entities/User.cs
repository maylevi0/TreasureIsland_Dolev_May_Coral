using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TreasureIsland_Dolev_May_Coral.Shared.Entities
{
    public class User
    {
        public int ID { get; set; }
        
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<Game> UserGames { get; set; }
    }
}
