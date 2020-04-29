drop database if exists patient_sass;
create database patient_sass;
grant all on patient_sass.* to patient_sass@'172.11.0.%' identified by 'secret';
