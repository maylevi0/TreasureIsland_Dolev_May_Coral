using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TreasureIsland_Dolev_May_Coral.Shared.Entities
{
    public class Question
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "יש להזין תוכן לשאלה ")]
        [MinLength(3, ErrorMessage = "יש להזין לפחות שלושה תווים")]
        public string QuestionTitle { get; set; }
        public string QuestionImage { get; set; }
        public int GameID { get; set; }
        public Game QuestionGame { get; set; }
        public List<Distractor> QuestionDistractors { get; set; }

    }
}
