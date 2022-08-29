using Microsoft.EntityFrameworkCore.Migrations;

namespace TreasureIsland_Dolev_May_Coral.Server.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    FirstName = table.Column<string>(type: "TEXT", nullable: true),
                    LastName = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Games",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    GameName = table.Column<string>(type: "TEXT", nullable: true),
                    GameCode = table.Column<int>(type: "INTEGER", nullable: false),
                    IsPublish = table.Column<bool>(type: "INTEGER", nullable: false),
                    QTimeLimit = table.Column<int>(type: "INTEGER", nullable: false),
                    UserID = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Games", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Games_Users_UserID",
                        column: x => x.UserID,
                        principalTable: "Users",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Questions",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    QuestionTitle = table.Column<string>(type: "TEXT", nullable: true),
                    QuestionImage = table.Column<string>(type: "TEXT", nullable: true),
                    GameID = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Questions", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Questions_Games_GameID",
                        column: x => x.GameID,
                        principalTable: "Games",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Distractors",
                columns: table => new
                {
                    ID = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    DistractorContent = table.Column<string>(type: "TEXT", nullable: true),
                    IsCorrect = table.Column<bool>(type: "INTEGER", nullable: false),
                    IsImage = table.Column<bool>(type: "INTEGER", nullable: false),
                    QuestionID = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Distractors", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Distractors_Questions_QuestionID",
                        column: x => x.QuestionID,
                        principalTable: "Questions",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Distractors_QuestionID",
                table: "Distractors",
                column: "QuestionID");

            migrationBuilder.CreateIndex(
                name: "IX_Games_UserID",
                table: "Games",
                column: "UserID");

            migrationBuilder.CreateIndex(
                name: "IX_Questions_GameID",
                table: "Questions",
                column: "GameID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Distractors");

            migrationBuilder.DropTable(
                name: "Questions");

            migrationBuilder.DropTable(
                name: "Games");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
