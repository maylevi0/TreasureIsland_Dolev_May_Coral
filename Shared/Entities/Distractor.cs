using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TreasureIsland_Dolev_May_Coral.Shared.Entities
{
    public class Distractor
    {
        public int ID { get; set; }
        [MinLength(2, ErrorMessage = "יש להזין לפחות שני תווים")]
        public string DistractorContent { get; set; }
        public bool IsCorrect { get; set; }
        public bool IsImage { get; set; }
        public int QuestionID { get; set; }
        public Question DistractorQuestion { get; set; }
    }
}
