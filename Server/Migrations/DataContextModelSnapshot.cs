﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TreasureIsland_Dolev_May_Coral.Server.Data;

namespace TreasureIsland_Dolev_May_Coral.Server.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.12");

            modelBuilder.Entity("TreasureIsland_Dolev_May_Coral.Shared.Entities.Distractor", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("DistractorContent")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsCorrect")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsImage")
                        .HasColumnType("INTEGER");

                    b.Property<int>("QuestionID")
                        .HasColumnType("INTEGER");

                    b.HasKey("ID");

                    b.HasIndex("QuestionID");

                    b.ToTable("Distractors");
                });

            modelBuilder.Entity("TreasureIsland_Dolev_May_Coral.Shared.Entities.Game", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("GameCode")
                        .HasColumnType("INTEGER");

                    b.Property<string>("GameName")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsPublish")
                        .HasColumnType("INTEGER");

                    b.Property<int>("QTimeLimit")
                        .HasColumnType("INTEGER");

                    b.Property<int>("UserID")
                        .HasColumnType("INTEGER");

                    b.HasKey("ID");

                    b.HasIndex("UserID");

                    b.ToTable("Games");
                });

            modelBuilder.Entity("TreasureIsland_Dolev_May_Coral.Shared.Entities.Question", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("GameID")
                        .HasColumnType("INTEGER");

                    b.Property<string>("QuestionImage")
                        .HasColumnType("TEXT");

                    b.Property<string>("QuestionTitle")
                        .HasColumnType("TEXT");

                    b.HasKey("ID");

                    b.HasIndex("GameID");

                    b.ToTable("Questions");
                });

            modelBuilder.Entity("TreasureIsland_Dolev_May_Coral.Shared.Entities.User", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .HasColumnType("TEXT");

                    b.HasKey("ID");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("TreasureIsland_Dolev_May_Coral.Shared.Entities.Distractor", b =>
                {
                    b.HasOne("TreasureIsland_Dolev_May_Coral.Shared.Entities.Question", "DistractorQuestion")
                        .WithMany("QuestionDistractors")
                        .HasForeignKey("QuestionID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("DistractorQuestion");
                });

            modelBuilder.Entity("TreasureIsland_Dolev_May_Coral.Shared.Entities.Game", b =>
                {
                    b.HasOne("TreasureIsland_Dolev_May_Coral.Shared.Entities.User", "GameUser")
                        .WithMany("UserGames")
                        .HasForeignKey("UserID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("GameUser");
                });

            modelBuilder.Entity("TreasureIsland_Dolev_May_Coral.Shared.Entities.Question", b =>
                {
                    b.HasOne("TreasureIsland_Dolev_May_Coral.Shared.Entities.Game", "QuestionGame")
                        .WithMany("GameQuestions")
                        .HasForeignKey("GameID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("QuestionGame");
                });

            modelBuilder.Entity("TreasureIsland_Dolev_May_Coral.Shared.Entities.Game", b =>
                {
                    b.Navigation("GameQuestions");
                });

            modelBuilder.Entity("TreasureIsland_Dolev_May_Coral.Shared.Entities.Question", b =>
                {
                    b.Navigation("QuestionDistractors");
                });

            modelBuilder.Entity("TreasureIsland_Dolev_May_Coral.Shared.Entities.User", b =>
                {
                    b.Navigation("UserGames");
                });
#pragma warning restore 612, 618
        }
    }
}
