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
        SampleDBEntities db = new SampleDBEntities();

        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            using (SampleDBEntities db = new SampleDBEntities())
            {
                return db.Employees.ToList();
            }
        }

        [HttpGet]
        [Route("details/{id}")]
        public Employee details(int id)
        {
            using (SampleDBEntities db = new SampleDBEntities())
            {
                return db.Employees.FirstOrDefault(e => e.Id == id);
            }
        }

        [HttpGet]
        [Route("FindEmployee/{id}")]
        public Employee Get(int id)
        {
            using (SampleDBEntities db = new SampleDBEntities())
            {
                return db.Employees.FirstOrDefault(e => e.Id == id);
            }
        }

        [HttpDelete]
        [Route("deleteEmployee/{id}")]
        public IHttpActionResult delete(int id)
        {
            using (SampleDBEntities db = new SampleDBEntities())
            {
                Employee employee = db.Employees.Find(id);
                {
                    if (employee == null)
                    {
                        return NotFound();
                    }
                    db.Employees.Remove(employee);
                    db.SaveChanges();
                    return Ok(employee);
                }
            }
        }

        [HttpPost]
        [Route("InsertEmployee")]
        public IHttpActionResult Post(Employee employee)
        {
            using (SampleDBEntities db = new SampleDBEntities())
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                try
                {
                    db.Employees.Add(employee);
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
        public IHttpActionResult Update(Employee employee)
        {
            if (employee.Id != employee.Id)
            {
                return BadRequest();
            }
            db.Entry(employee).State = EntityState.Modified;

            try
            {
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
            //Employee objEmp = new Employee();
            //objEmp.Name = employee.Name;
            //objEmp.City = employee.City;
            //objEmp.Address = employee.Address;
            //db.SaveChanges();
            return Ok(employee);
        }
        private bool EmployeeExists(int id)
        {
            return db.Employees.Count(e => e.Id == id) > 0;
        }
    }

}