using System;
using System.Collections.Generic;

namespace UpmeetEvent.Models;

public partial class Event
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Date { get; set; }

    public string? Time { get; set; }

    public string? Location { get; set; }

    public string? Description { get; set; }

    public string? Image { get; set; }

    public virtual ICollection<Favorite> Favorites { get; set; } = new List<Favorite>();
}
