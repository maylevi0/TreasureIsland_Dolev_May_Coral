using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TreasureIsland_Dolev_May_Coral.Shared.Entities
{
    public class Game
    {
        public int ID { get; set; }
        public string GameName { get; set; }
        public int GameCode { get; set; }
        public bool IsPublish { get; set; }
        public int QTimeLimit { get; set; }

        public int UserID { get; set; }
        public User GameUser { get; set; }
        public List<Question> GameQuestions { get; set; }

    }
}
