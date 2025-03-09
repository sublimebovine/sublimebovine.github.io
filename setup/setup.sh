sudo apt update
sudo apt upgrade
echo "answer y to all prompts"
sleep 4
sudo apt install apache2
echo "answer n to all prompts about to pop up"
sleep 5
sudo apt install mysql-server
sudo mysql_secure_installation
sudo mysql
echo "answer y to all prompts"
sleep 4
sudo apt install php libapache2-mod-php php-mysql
mysql -u root -p
CREATE DATABASE zaphod;
exit
mysql -u root -p zaphod < zaphod.sql
