using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

using TreasureIsland_Dolev_May_Coral.Shared.Entities;

namespace TreasureIsland_Dolev_May_Coral.Server.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<Distractor> Distractors { get; set; }
        public DbSet<Question> Questions { get; set; }

    }
}
