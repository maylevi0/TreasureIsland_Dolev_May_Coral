using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TreasureIsland_Dolev_May_Coral.Shared.Entities
{
    public class Game
    {
        public int ID { get; set; }
        [Required (ErrorMessage = "יש להזין שם משחק")]
        [MinLength(2, ErrorMessage = "יש להזין לפחות שני תווים")]
        public string GameName { get; set; }
        public int GameCode { get; set; }
        public bool IsPublish { get; set; }
        [Range(20, 60, ErrorMessage = " יש לבחור ערך בין 20 ל- 60 שניות")]
        public int QTimeLimit { get; set; }

        public int UserID { get; set; }
        public User GameUser { get; set; }
        public List<Question> GameQuestions { get; set; }

    }
}
