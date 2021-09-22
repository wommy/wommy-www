---
TODO:
  - learn regex
---

# reference-able rsync

- [Rsync#Full_system_backup](https://wiki.archlinux.org/title/Rsync#Full_system_backup)

ran this,  
`rsync -aAXHv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup`

split my backups into...  

- Documents/
- w0m/ --exclude=Documents
- / --exclude=home/+list mentioned above

now i need to move those two other files back

rsync'd 20-10-05/w0m with same command

this feels longer than the root / one

i need some sane defaults to exclude stuff like

- node_modules
- cache

SO MUCH FASTER

`sudo du -sh */`

8.3G vs 4.3G 

`sudo rsync -aAXHv --exclude={"*/node_modules/*","*/.cache/*"} / /path/to/backup`

turns out i excluded node_modules from the 20-12-24 one,  
im guessing .cache will help going forward,  
maybe even a `*/cache/*` | `*/Cache/*` | `*/^cache$/*`  
i should learn regex

`sudo rsync -aAXHv --exclude={"*/node_modules/*","*/.cache/*","/.cache/","*/cache/*","*/Cache/*"} / /path/to/backup`

^ this cut 20G off my home/  
2/3  
66%

without that excludes, home is 270% larger,  
christ

really need to learn regex

other links
- [https://docs.npmjs.com/cli/v7/commands/npm-cache](https://docs.npmjs.com/cli/v7/commands/npm-cache)
- [https://superuser.com/questions/171534/list-the-current-folder-folders-sizes-with-the-terminal](https://superuser.com/questions/171534/list-the-current-folder-folders-sizes-with-the-terminal)

