FROM ubuntu
LABEL version="1.0"
LABEL description="Webサーバー（リバプロを兼ねる）"
ADD ./websrv/settings/my-proxy.conf /etc/apache2/sites-available/my-proxy.conf
RUN apt-get update -y \
&& apt install -y git \
&& apt-get install -y apache2 \
&& a2enmod proxy \
&& a2enmod proxy_http \
&& a2ensite my-proxy \
&& a2dissite 000-default \
&& service apache2 restart
CMD apachectl -D FOREGROUND