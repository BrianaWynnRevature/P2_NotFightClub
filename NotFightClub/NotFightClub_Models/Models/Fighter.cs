﻿using System;
using System.Collections.Generic;

#nullable disable

namespace NotFightClub_Models.Models
{
    public partial class Fighter
    {
        public Fighter()
        {
            Wagers = new HashSet<Wager>();
        }

        public int FighterId { get; set; }
        public int? FightId { get; set; }
        public int? CharacterId { get; set; }
        public int? Votes { get; set; }

        public virtual Character Character { get; set; }
        public virtual Fight Fight { get; set; }
        public virtual ICollection<Wager> Wagers { get; set; }
    }
}
