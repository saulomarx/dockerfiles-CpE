# CeP-dockerfiles
kickoff dockerfile

# Dependencias

* Necessário instalar o docker e o doker compose:
- https://www.digitalocean.com/community/tutorials/como-instalar-e-usar-o-docker-no-ubuntu-18-04-pt Executar Passos 1 e 2
- https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-16-04

# Comandos importantes

- Subir containers: docker-compose -f <file> up -d
- Ver status dos containers: docker-compose -f <file> ps
- Executar no container: docker exec -it <nome-do-container> <Comando>
  -> exemplo: docker exec -it db mysql -u root -p
