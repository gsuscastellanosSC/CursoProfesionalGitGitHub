# CursoProfesionalGitGitHub
	Deja de versionar tus proyectos usando tu propio sistema de control de versiones. Mejor usa Git el Sistema de control de versiones por excelencia que utiliza la industria, aprende a gestionar tus proyectos alojándolos en Github. Domina Git y Github de cero a avanzado. Curso profesional de Git y GitHub en https://platzi.com/cursos/git-github/ @platzi 💚💚

# Primeros pasos
    git int => Iniciar Git.
    rm -rf .git => Eliminar git de un repo.

# Configuración de Git
	git config
	git config --list
	git config --list --show origin
	git config --list --show-origin
	git config --global
	git config --global user.name "SC"
	git config --global user.email "jesuscastellanospaez@hotmail.com"
	git config --global -e => Ver configuración actual.

# Git States
# Working Directory
# Staging Area
# Agragar a la zona de preparación
	git checkout --Archivo.txt (Permite Ignorar cambios de un archivo).

	git add Archivo.txt (Agrega archivo especifico)

	git add .            (Agragar todos los archivos)

# Ver estado
	git status

# Quitar de la zona de preparación
	git rm --cached archivo.txt (Quitar de la zona de preparación).

# Quitar de la zona de preparación
# Realizar commint
	git commit -m "Este es el pimer commit de este archivo"
	git commit -am "Este es el pimer commit de este archivo"

# Ver el historial de cambios del archivo
	git log
	git log Archivo.txt

# Muestra todos los cambios sobre un archivo
	git show Archivo.txt

# Comparar versiones
	git diff commint commint

# Volver a una versión anterior
	git reset commit --hard (borramos todos los cambios y lo que tengamos en staging)
	git reset commit --soft (soft conservamos cambios y lo que tengamos en staging)
	git checkout (commit) Archivo.txt
	git checkout (rama) Archivo.txt

# Ver Cambio en bytes
	git log --stat(Cambio en bytes)

# Crear una rama
	git branch (branchName)

# Cambiar de rama
	git checkout (branchName)

# Merge entre branchs
	=> git merge (branchName) = Estar en la rama master o en la que se quiere dejar el <Head>**

# Traer un repositorio externo
	git remote add origin (url)
	git remote (muestra el origen)
	git remote -v(es verval)
	git remote remove origin (Elminar origen remoto)

	git pull origin master --allow-unrelated-histories (Fuerza la union de las diferentes historias)
	git pull origin master (Descarga cambios)
	git push (origin) (master) (Sube Cambios)

# Seguridad
	ssh-keygen -t rsa -b 4096 -C "sc" (crea la llave publica y privada)
	eval $(ssh-agent -s) (saber si el agente ssh esta ejecuntando)
	ssh-add ~/.ssh/id_rsa (agregar la llave privada)
	eval "$(ssh-agent -s)" && ssh-add ~/.ssh/id_rsa
	git remote set-url origin git@github.com:gsuscastellanosSC/hyperblog.git (cambiar url para que sea con ssh)

# Tags
	git log --all(Muesta toda la historia)
	git log --all --graph (Muestra toda la historia con la ineracción de las ramas)
	git log --all --graph --decorate --oneline
	alias arbolito="git log --all --graph --decorate --oneline"(forma de alias en linux)
	git tag -a v0.1 -m "apendiendo tags en git" (hash del commit) (crear un tag)
	git show-ref --tags
	git push origin --tags (enviar los tags al repositorio remoto)
	git tag -d v0.1   && $ git push origin :refs/tags/v0.1 (Borrar tags)

# Actualizar tags
	git tag new old
	git tag -d old
	git push origin :refs/tags/old
	git push --tags
	git pull --prune --tags

# ramas
	git checkout -b new-branch
	git show-branch --all (¿Cuales branch existen y sus historias)
	gitk (igual que la anterior per con gui)
	git branch -d nombre_rama (Elimina rama local)
	git push origin :nombre_branch (Elimina rama remota)


# ¿como hacer un Fork?
	git clone git@github.com:gsuscastellanosSC/hyperblog-1.git
	git remote add upstream (url-github)
	git pull upstream master (trae todos los cabios de master del origen upstream)

# Cambiar el nombre de una rama
	git branch -m nombre-rama nombre-rama-nueva

# Git Rebase: Reorganizando el trabajo realizado
	git rebase "master" (desde otra rama)
	git rebase "otra rama" (desde master)

# Elminar una Rama
	git branch -D "otra rama"

# Git Stash
	git stash (crea un stash)
	git stash list (lista los stash)
	git stash pop (carga el stash)
	git stash branch english-version (Crear una rama con el stash)
	git stash drop (borrar un stash)

# LIMPIAR ARCHIVOS NO DESEADOS
	git clean --dry-run (ver que se va a borrar)  **Ejecución en seco, como probraban los cohetes y los barcos**
	git clean -f (borrar)

# LOG
	git log --oneline

# ¿Como traer un solo commit de otra rama?
	git cherry-pick "commit"

# Remendar
	git commit --amend (coloca los cambios en el útimo commit realizado)

# Git Reset y Reflog: Úsese en caso de emergencia
	git reflog (Permite ver el log completo)
	git reset HEAD@{2}
	git RESET --hard 9ea6558

# Buscar en archivos y commits de Git con Grep y log
	git grep -n color (lugares donde uso la palabra color)
	git grep -c color (cuanteas veces esta la palabra color)
	git log -S "Cabecera" (Busca en los commits la palabra cabecera)

# Buscar en archivos y commits de Git con Grep y log
	git short log (Ver commits realizados por persona)
	git shortlog -sn (¿cuantas veces han realizado commits, cada persona?)
	git shortlog -sn --all (detalle de absolutamente todos los commits)
	git config --global alias.stats "shortlog -sn --all --no-merges" (alias)

# Detalle de cambios
	git blame blogpost.html -c (Sobre un archivo)
	git blame --help
	git blame css/estilos.css -L35,58

# Ver ramas remotas
	git branch -r
	git branch -a

# Links
	git - la guía sencilla:
		https://rogerdudler.github.io/git-guide/index.es.html
	git-flow:
		https://danielkummer.github.io/git-flow-cheatsheet/
