using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TreasureIsland_Dolev_May_Coral.Shared.Entities
{
    public class Question
    {
        public int ID { get; set; }
        public string QuestionTitle { get; set; }
        public string QuestionImage { get; set; }
        public int GameID { get; set; }
        public Game QuestionGame { get; set; }
        public List<Distractor> QuestionDistractors { get; set; }

    }
}
