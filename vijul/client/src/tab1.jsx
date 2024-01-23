import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
 const Tab1 = () => {
    const columns = [
        { field: 'id', headerName: 'Packages', width: 600,headerClassName: 'header-column'  },
        { field: 'rate', headerName: 'Rate(in sqft)', width: 450,headerClassName: 'header-column'  },
        { field: 'total', headerName: 'Total', width: 130,headerClassName: 'header-column'  },
        
      ];
      const rows = [
        { id:"Civil 1", rate: '567.80', total: '2,98,6792'},
        { id:"Civil 2", rate: '567.80', total: '2,98,6792'},
        { id:"Civil 3", rate: '567.80', total: '2,98,6792'},
        { id:"Civil 4", rate: '567.80', total: '2,98,6792'},
        { id:"Civil 5", rate: '567.80', total: '2,98,6792'},
      ];
  return (
    <>
    <div style={{width:"100%"}}>
    <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
      />
      </div>
    </>
  )
}
export default Tab1;

