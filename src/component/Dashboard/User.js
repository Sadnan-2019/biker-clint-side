import React from 'react';

const User = ({user,i}) => {
          const {email} = user
          return (
                    <div>
                                    <tr>
                <th>{i+1}</th>
                <td className=''>{email}</td>
                <td><button class="btn btn-xs " >Make Admin</button></td>

                 
          
                
              </tr>       
                    </div>
          );
};

export default User;