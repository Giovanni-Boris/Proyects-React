import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import {MovieContext}  from "../../context/movieContext/MovieContext";
import { getMovies, deleteMovie } from "../../context/movieContext/apiCalls";

const ProductList = () => {
  const {movies, dispatch} = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch])
  console.log(movies);
  const handleDelete = (id) => {
    console.log(id)
    deleteMovie(id,dispatch);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "movie",
      headerName: "Movie",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        ); 
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "year", width: 120 },
    { field: "limit", headerName: "limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/dashboard/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
	return (
    <div className="productList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={((row) => row._id)}
        checkboxSelection
      />
    </div>
  );
}

export default ProductList