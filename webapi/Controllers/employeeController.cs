using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webapi.Models;

namespace webapi.Controllers
{
    [RoutePrefix("api/employee")]
    public class employeeController : ApiController
    {
        SampleDBEntities1 db = new SampleDBEntities1();

        [HttpGet]
        public IEnumerable<registration> Get()
        {
            using (SampleDBEntities1 db = new SampleDBEntities1())
            {
                return db.registrations.ToList();
            }
        }

        [HttpGet]
        [Route("details/{id}")]
        public registration details(int id)
        {
            using (SampleDBEntities1 db = new SampleDBEntities1())
            {
                return db.registrations.FirstOrDefault(e => e.Id == id);
            }
        }

        [HttpGet]
        [Route("FindEmployee/{id}")]
        public registration Get(int id)
        {
            using (SampleDBEntities1 db = new SampleDBEntities1())
            {
                return db.registrations.FirstOrDefault(e => e.Id == id);
            }
        }

        [HttpDelete]
        [Route("deleteEmployee/{id}")]
        public IHttpActionResult delete(int id)
        {
            using (SampleDBEntities1 db = new SampleDBEntities1())
            {
                registration employee = db.registrations.Find(id);
                {
                    if (employee == null)
                    {
                        return NotFound();
                    }
                    db.registrations.Remove(employee);
                    db.SaveChanges();
                    return Ok(employee);
                }
            }
        }

        [HttpPost]
        [Route("InsertEmployee")]
        public IHttpActionResult Post(registration employee)
        {
            using (SampleDBEntities1 db = new SampleDBEntities1())
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                try
                {
                    db.registrations.Add(employee);
                    db.SaveChanges();
                }
                catch (Exception ex)
                {
                    throw ex;
                }
                return Ok(employee);

            }
        }

        [HttpPut]
        [Route("UpdateEmployee")]
        public IHttpActionResult Update(registration employee)
        {
            if (employee.Id != employee.Id)
            {
                return BadRequest();
            }

            try
            {

                var updatedUser = db.registrations.SingleOrDefault(x => x.Id == employee.Id);

                updatedUser.name = employee.name;
                updatedUser.city = employee.city;
                updatedUser.gender = employee.gender;
                updatedUser.department = employee.department;
                updatedUser.email = employee.email;
                updatedUser.contact = employee.contact;
                db.Entry(updatedUser).State = EntityState.Modified;

                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(employee.Id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            //    //Employee objEmp = new Employee();
            //    //objEmp.Name = employee.Name;
            //    //objEmp.City = employee.City;
            //    //objEmp.Address = employee.Address;
            //    //db.SaveChanges();
             return Ok(employee);
            }
            private bool EmployeeExists(int id)
            {
            return db.registrations.Count(e => e.Id == id) > 0;
            }
        }

}