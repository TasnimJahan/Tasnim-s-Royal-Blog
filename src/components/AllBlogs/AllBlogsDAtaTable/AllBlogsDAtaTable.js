import React from 'react';

const AllBlogsDAtaTable = ({blogLists}) => {
    console.log(blogLists);
    return (
        <table className="table table-striped table-dark table-hover table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Id</th>
                <th className="text-secondary" scope="col">Blog Title</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  blogLists.map((orderList, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{orderList._id}</td>
                        <td>{orderList.blogTitle}</td>
                        <td>Done</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};


export default AllBlogsDAtaTable;