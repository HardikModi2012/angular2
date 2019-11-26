using System;
using System.Collections.Generic;
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
        public Employee details(int Id)
        {
            using (SampleDBEntities db = new SampleDBEntities())
            {
                return db.Employees.FirstOrDefault(e => e.Id == Id);
            }
        }

        [HttpGet]
        [Route("FindEmployee")]
        public Employee Get(int Id)
        {
            using (SampleDBEntities db = new SampleDBEntities())
            {
                return db.Employees.FirstOrDefault(e => e.Id == Id);
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
                catch(Exception)
                {
                    throw;
                }
                    return Ok(employee);

            }
        }

        [HttpPut]
        [Route("UpdateEmployee")]
        public IHttpActionResult Update(Employee employee)
        {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                try
                {
                    Employee objEmp = new Employee();
                    objEmp = db.Employees.Find(employee.Id);
                    if (objEmp != null)
                    {
                        objEmp.Name = employee.Name;
                        objEmp.City = employee.City;
                        objEmp.Address = employee.Address;
                    }
                int i = this.db.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }
                return Ok(employee);

            }
        }
    }

