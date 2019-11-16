export class DataBase {

    projects = [
        {'id': 1, 'name': 'Projeto de teste', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', 'img': '../../assets/img/1.jpg'},
        {'id': 2, 'name': 'Projeto de teste', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', 'img': '../../assets/img/2.jpg'},
        {'id': 3, 'name': 'Projeto de teste', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', 'img': '../../assets/img/3.jpg'},
        {'id': 4, 'name': 'Projeto de teste', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', 'img': '../../assets/img/4.jpg'},
        {'id': 5, 'name': 'Projeto de teste', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', 'img': '../../assets/img/5.jpg'},
        ]

    getProjects() {
        return this.projects
    }
    
    getProjectById(id: any){
        let project: any;

        this.projects.forEach(element => {
            if (element['id'] == id){
                project = element;
            }
        });

        return project;
        
    }

}