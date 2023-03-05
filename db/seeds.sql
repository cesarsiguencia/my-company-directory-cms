INSERT INTO departments (dept_name)
VALUES
  ('Human Resources'),
  ('Finances'),
  ('Operations and Management'),
  ('Advertisement'),
  ('Engineering');

INSERT INTO managers (manager_name)
VALUES
  ('John Dryden'),
  ('Alexander Pope'),
  ('Lionel Johnson');


INSERT INTO roles (job_title, role_salary, role_department)
VALUES
  ('Manager', '70K',5),
  ('Engineer', '85K',5),
  ('Associate', '45K',5),
  ('Coordinator', '55K',5),
  ('Assistant', '35K',5),
  ('Director', '90K',5);



INSERT INTO employees (first_name, last_name, employee_role, reporting_manager)
VALUES
  ('James', 'Fraser', 2, 1),
  ('Jack', 'London', 2, 1),
  ('Robert', 'Bruce', 2, 1),
  ('Peter', 'Greenaway', 2, 1),
  ('Derek', 'Jarman', 2, 1),
  ('Paolo', 'Pasolini', 2, 1),
  ('Heathcote', 'Williams', 2, 1),
  ('Sandy', 'Powell', 2, 1),
  ('Emil', 'Zola', 2, 1),
  ('Sissy', 'Coalpits', 2, 1),
  ('Antoinette', 'Capet', 2, 1),
  ('Samuel', 'Delany', 2, 1),
  ('Tony', 'Duvert', 2, 1),
  ('Dennis', 'Cooper', 2, 1),
  ('Monica', 'Bellucci', 2, 1),
  ('Samuel', 'Johnson', 2, 1);
