﻿using Microsoft.EntityFrameworkCore;

namespace project4.Models
{
    public class ProductContext: DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options) : base(options)
        {
        }
        public DbSet<Product> Product { get; set; }
       

    }
}
