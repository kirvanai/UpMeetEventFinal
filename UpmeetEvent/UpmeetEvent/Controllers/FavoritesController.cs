using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UpmeetEvent.Models;

namespace UpmeetEvent.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoritesController : ControllerBase
    {
        private readonly EventsContext _context;
        

        public FavoritesController(EventsContext context)
        {
            _context = context;
        }

    // GET: api/Favorites
    [HttpGet("{userId}")]
    public async Task<ActionResult<IEnumerable<Favorite>>> GetFavorites(int userId)
        {
          if (_context.Favorites == null)
          {
              return NotFound();
          }

            return _context.Favorites.Where(f => f.UserId == userId).ToList();
            
        }

    // GET: api/Favorites/5
    //[HttpGet("{id}")]
    //public async Task<ActionResult<Favorite>> GetFavorite(int id)
    //{
    //  if (_context.Favorites == null)
    //  {
    //    return NotFound();
    //  }
    //  var favorite = await _context.Favorites.FindAsync(id);
    //  var mainEvent = await _context.Events.FindAsync(favorite.EventId);
    //  var user = await _context.Users.FindAsync(favorite.UserId);

    //  if (favorite == null)
    //  {
    //    return NotFound();
    //  }

    //  return favorite;
    //}

    // PUT: api/Favorites/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
        public async Task<IActionResult> PutFavorite(int id, Favorite favorite)
        {
            if (id != favorite.Id)
            {
                return BadRequest();
            }

            _context.Entry(favorite).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FavoriteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Favorites
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<Favorite> PostFavorite(Favorite favorite)
        {
         
            _context.Favorites.Add(favorite);
            await _context.SaveChangesAsync();

             favorite = (Favorite)CreatedAtAction("GetFavorite", new { id = favorite.Id }, favorite).Value;

             return favorite;
    }

        // DELETE: api/Favorites/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFavorite(int id)
        {
            if (_context.Favorites == null)
            {
                return NotFound();
            }
            var favorite = await _context.Favorites.FindAsync(id);
            if (favorite == null)
            {
                return NotFound();
            }

            _context.Favorites.Remove(favorite);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FavoriteExists(int id)
        {
            return (_context.Favorites?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
