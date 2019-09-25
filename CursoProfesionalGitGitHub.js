*******************
****Iniciar Git****
*******************

git int

*******************
****Iniciar Git****
*******************

**********************************
*******Configuración de Git*******
**********************************

git config
git config --list
git config --list --show origin
git config --list --show-origin
git config --global
git config --global user.name "SC"
git config --global user.email "jesuscastellanospaez@hotmail.com"

**********************************
*******Configuración de Git*******
**********************************

********************************************
******Agragar a la zona de preparación******
********************************************

git checkout --Archivo.txt (Permite Ignorar cambios de un archivo).

git add Archivo.txt (Agrega archivo especifico)

git add .            (Agragar todos los archivos)

********************************************
******Agragar a la zona de preparación******
********************************************

****************************
*********Ver estado*********
****************************

git status

****************************
*********Ver estado*********
****************************

***************************************************************************
*****************Quitar de la zona de preparación**************************
***************************************************************************

git rm --cached archivo.txt (Quitar de la zona de preparación).

***************************************************************************
*****************Quitar de la zona de preparación**************************
***************************************************************************

************************************************************
**********************Realizar commint**********************
************************************************************

git commit -m "Este es el pimer commit de este archivo"
git commit -am "Este es el pimer commit de este archivo"

************************************************************
**********************Realizar commint**********************
************************************************************

*****************************************************
*******Ver el historial de cambios del archivo*******
*****************************************************

git log
git log Archivo.txt

*****************************************************
*******Ver el historial de cambios del archivo*******
*****************************************************

***************************************************************
************Muestra todos los cambios sobre un archivo*********
***************************************************************

git show Archivo.txt

***************************************************************
************Muestra todos los cambios sobre un archivo*********
***************************************************************

**************************************
**********Comparar versiones**********
**************************************

git diff commint commint

**************************************
**********Comparar versiones**********
**************************************

*****************************************************************************
************************Volver a una versión anterior************************
*****************************************************************************

git reset commit --hard (borramos todos los cambios y lo que tengamos en staging) 

git reset commit --soft (soft conservamos cambios y lo que tengamos en staging) 

git checkout (commit) Archivo.txt

git checkout (rama) Archivo.txt

*****************************************************************************
************************Volver a una versión anterior************************
*****************************************************************************

****************************************************************************
**************************Ver Cambio en bytes*******************************
****************************************************************************

git log --stat(Cambio en bytes)

****************************************************************************
**************************Ver Cambio en bytes*******************************
****************************************************************************

***************************************************************************
****************************Crear una rama*********************************
***************************************************************************

git branch (branchName)

***************************************************************************
****************************Crear una rama*********************************
***************************************************************************


***************************************************************************
**************************Cambiar de rama**********************************
***************************************************************************

git checkout (branchName)

***************************************************************************
**************************Cambiar de rama**********************************
***************************************************************************

*******************************************************************
************************Merge entre branchs************************
*******************************************************************

git merge (branchName)

**Estar en la rama master o en la que se quiere dejar el <Head>**
*******************************************************************
************************Merge entre branchs************************
*******************************************************************

****************************************************
************Traer un repositorio externo************
****************************************************

git remote add origin (url)
git remote (muestra el origen)
git remote -v(es verval)
git remote remove origin (Elminar origen remoto)


git pull origin master --allow-unrelated-histories (Fuerza la union de las diferentes historias)

git pull origin master (Descarga cambios)

git push (origin) (master) (Sube Cambios)
****************************************************
************Traer un repositorio externo************
****************************************************

*************************************
**************Seguridad**************
*************************************

ssh-keygen -t rsa -b 4096 -C "jesuscastellanospaez@gmail.com" (crea la llave publica y privada)
eval $(ssh-agent -s) (saber si el agente ssh esta ejecuntando)
ssh-add ~/.ssh/id_rsa (agregar la llave privada)

eval "$(ssh-agent -s)" && ssh-add ~/.ssh/id_rsa

git remote set-url origin git@github.com:gsuscastellanosSC/hyperblog.git (cambiar url para que sea con ssh)

*************************************
**************Seguridad**************
*************************************

**********************************
***************TAGS***************
**********************************

git log --all(Muesta toda la historia)
git log --all --graph (Muestra toda la historia con la ineracción de las ramas)
git log --all --graph --decorate --oneline
alias arbolito="git log --all --graph --decorate --oneline"(forma de alias en linux)

git tag -a v0.1 -m "apendiendo tags en git" (hash del commit) (crear un tag)
git show-ref --tags

git push origin --tags (enviar los tags al repositorio remoto)
git tag -d v0.1   && $ git push origin :refs/tags/v0.1 (Borrar tags)


**********************************
***************TAGS***************
**********************************

************************
********ramas***********
************************

git checkout -b new-branch
git show-branch --all (¿Cuales branch existen y sus historias)
gitk (igual que la anterior per con gui)
git push origin :[nombre_branch] (Elimina rama remota)


************************
********ramas***********
************************

**************************
***¿como hacer un Fork?***
**************************
git clone git@github.com:gsuscastellanosSC/hyperblog-1.git

git remote add upstream (url-github)
git pull upstream master (trae todos los cabios de master del origen upstream)

**************************
***¿como hacer un Fork?***
**************************

***************************************
*****Cambiar el nombre de una rama*****
***************************************

git branch -m nombre-rama nombre-rama-nueva

***************************************
*****Cambiar el nombre de una rama*****
***************************************

**************************************************************************************
********************Git Rebase: Reorganizando el trabajo realizado********************
**************************************************************************************

	git rebase "master" (desde otra rama)

	git rebase "otra rama" (desde master)

	*************************
	****Elminar una Rama*****
	*************************

		git branch -D "otra rama"

	**************************
	*****Elminar una Rama*****
	**************************

**************************************************************************************
********************Git Rebase: Reorganizando el trabajo realizado********************
**************************************************************************************


*******************************************
*****************Git Stash*****************
*******************************************

git stash (crea un stash)
git stash list (lista los stash)
git stash pop (carga el stash)
git stash branch english-version (Crear una rama con el stash)
git stash drop (borrar un stash)

*******************************************
*****************Git Stash*****************
*******************************************


******************************************************
*************LIMPIAR ARCHIVOS NO DESEADOS*************
******************************************************

git clean --dry-run (ver que se va a borrar)  **Ejecución en seco, como probraban los cohetes y los barcos**
git clean -f (borrar)       

******************************************************
*************LIMPIAR ARCHIVOS NO DESEADOS*************
******************************************************

***************
******LOG******
***************

git log --oneline

***************
******LOG******
***************

*************************************************
****¿Como traer un solo commit de otra rama? ****
*************************************************

git cherry-pick "commit"

*************************************************
****¿Como traer un solo commit de otra rama? ****
*************************************************

****************
****Remendar****
****************

git commit --amend (coloca los cambios en el útimo commit realizado)

****************
****Remendar****
****************

*******************************************************************************
****************Git Reset y Reflog: Úsese en caso de emergencia****************
*******************************************************************************

git reflog (Permite ver el log completo)

git reset HEAD@{2}

git RESET --hard 9ea6558

*******************************************************************************
****************Git Reset y Reflog: Úsese en caso de emergencia****************
*******************************************************************************

**************************************************************************
************Buscar en archivos y commits de Git con Grep y log************
**************************************************************************

git grep -n color (lugares donde uso la palabra color)

git grep -c color (cuanteas veces esta la palabra color)

$ git log -S "Cabecera" (Busca en los commits la palabra cabecera)


**************************************************************************
************Buscar en archivos y commits de Git con Grep y log************
**************************************************************************

************************************
************Alias en Git************
************************************

git short log (Ver commits realizados por persona)
git shortlog -sn (¿cuantas veces han realizado commits, cada persona?)
git shortlog -sn --all (detalle de absolutamente todos los commits)


git config --global alias.stats "shortlog -sn --all --no-merges" (alias)

************************************
************Alias en Git************
************************************

**************************************************************
**********************Detalle de cambios**********************
**************************************************************

git blame blogpost.html -c (Sobre un archivo)
git blame --help
git blame css/estilos.css -L35,58

**************************************************************
**********************Detalle de cambios**********************
**************************************************************

*******************************************
*************Ver ramas remotas*************
*******************************************

git branch -r
git branch -a


*******************************************
*************Ver ramas remotas*************
*******************************************

/*Más Comandos;)*/

https://rogerdudler.github.io/git-guide/index.es.html

/*Más Comandos;)*/