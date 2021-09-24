using System;
using System.Collections.Generic;

#nullable disable

namespace NotFightClub_Models.Models
{
    public partial class Weapon
    {
        public Weapon()
        {
            Characters = new HashSet<Character>();
        }

        public int WeaponId { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Character> Characters { get; set; }
    }
}
