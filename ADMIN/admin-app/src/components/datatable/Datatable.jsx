import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { useState } from "react";

const Datatable = () => {
	const [data, setData] = useState(userRows);

	const actionColumn = [
		{
			field: "action",
			headerName:"Action",
			width: 200,
			renderCell:()=>{
				return (
					<div className="cellAction">
						<div className="viewButton">View</div>
						<div className="deleteButton">Delete</div>
					</div>
				)
			}
		}
	];
	return (
		<div className="datatable">
			<DataGrid
		        className="datagrid"
		        rows={data}
		        columns={userColumns.concat(actionColumn)}
		        pageSize={9}
		        rowsPerPageOptions={[9]}
		        checkboxSelection
		    />
		</div>
	)
}

export default Datatable