import { Component } from "react";
import StudentServices from './StudentServices'
    
    class ListStudentComponent extends Component {
        constructor(){
            super();
            this.state={
                students :[]
            }
        }

componentDidMount()
{
      StudentServices.getStudents().then((res)=>
      {
          this.setState({students: res.data})
      }
      );
    }

        render() {
            return (
                <div>
                    <h2 className="text-center"> Student List</h2>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                <tr>
                                    
                                      <th>  Student First Name</th>
                                    <th>  Student Second Name </th>  
                                   <th> Student Email Id </th>
                                       
                                    
                                </tr>
                            </tbody>
                           <tbody>
                               {
                                   this.state.students.map(
                                       students=>
                                       <tr key= {students.id}>
                                           <td> { students.firstName}</td>
                                           <td> { students.lastname}</td>
                                           <td> { students.emailId}</td>

                                       </tr>
                                   )
                               }
                           </tbody>
                        </table>
                    </div>
                </div>
            );
        }
    }
    
    export default ListStudentComponent;
