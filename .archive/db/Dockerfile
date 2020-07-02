# A MySQL container.
FROM mariadb:10.4
# /var/lib/mysql is a volume, so it gets overwriten with snapshot of previous state
# on container restart
COPY . /var/data
WORKDIR /var/data

EXPOSE 3306
# TODO: find a cleaner way to solve the problem
# The problem is that if by chance we have a dirty container shutdown, /var/lib/mysql gets corrupted,
# Also we want to start with a clean slate at least for now. Maybe we should not even set up /var/lib/mysql
# as a volume.
CMD rm -rf /var/lib/mysql/* && mysql_install_db && chown mysql.mysql -R /var/lib/mysql && mysqld --user=mysql --init-file=/var/data/init.sql
