import React from 'react'
import { CDataTable, CBadge, CButton, CCardBody } from './coreui/index'
import { NavMenu } from './NavMenu'
import users from '../data/users.json'
import './UserList.css'

export const UserList = () =>{
    const usersData = users
    const fields = [
        { key: 'name', _style: { width: '30%' } }, 
        { key: 'username', _style: { width: '20%' } },
        { key: 'profile', _style: { width: '20%'} },
        { key: 'status', _style: { width: '15%'} },
        {
            key: 'show_details',
            label: '',
            _style: { width: '15%' },
            sorter: false,
            filter: false
        }
    ]

    const getBadge = (status)=>{
        switch (status) {
            case 'Active': return 'success'
            case 'Inactive': return 'secondary'            
            default: return 'primary'
        }
    }

    const goEdit = (id) => { alert(`Go to editing the user: ${usersData[id].name}`) }
    const goDelete = (id) => { alert(`Go to deleting the user: ${usersData[id].name}`) }

    return (
        <>
        <NavMenu title={"Users"} />
        <CButton size="sm" color="warning" className="ml-1 btnTextWhite margTop"
            
        >
            + Add
        </CButton>
        <div className="table_user_list">
            <CDataTable
                items={usersData}
                fields={fields}                             
                footer
                itemsPerPageSelect                
                itemsPerPage={5}
                tableFilter
                sorter
                hover                
                pagination
                scopedSlots = {{
                    'status':
                    (item)=>(
                        <td>
                        <CBadge color={getBadge(item.status)}>
                            {item.status}
                        </CBadge>
                        </td>
                    ),
                    'show_details':
                    (item, index)=>{
                        return (
                        <td className="py-2">
                            <CCardBody>                                            
                                <CButton size="sm" color="info"
                                    onClick={()=>goEdit(item.id)}
                                >
                                    Edit
                                </CButton>
                                <CButton size="sm" color="danger" className="ml-1"
                                    onClick={()=>goDelete(item.id)}
                                >
                                    Delete
                                </CButton>
                            </CCardBody>
                        </td>
                        )
                    }                    
                }}
            >
            </CDataTable>
        </div>  
        </> 
    )
}



