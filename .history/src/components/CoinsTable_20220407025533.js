import React, { useEffect, useState } from 'react'
import { CoinList } from '../config/api';
 import { makeStyles } from "@material-ui/core/styles";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Pagination from "@material-ui/lab/Pagination";
import {
   TableBody,
    createTheme,
 ThemeProvider,
 Container,
//  Typography,
 TextField,
 TableContainer,
 LinearProgress,
 Table,
 TableHead,
 TableRow,
//  Paper,
 TableCell
  } from "@material-ui/core";
import { CryptoState } from '../CryptoContext';
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
export const CoinsTable = () => {
    const [coins,setCoins]=useState([]) ;
    const [loading,setLoading]=useState([]) ;
    const [search,setSearch]=useState("") ;
    const [page, setPage] = useState(1);
    const navigate=useNavigate();
    const fetchCoin = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));
        setCoins(data);
        setLoading(false);
        // setCoin(data);
      };
      console.log("Coins",coins);
      
  const { currency, symbol } = CryptoState();
      useEffect(() => {
        fetchCoin();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currency]);
      const useStyles = makeStyles({
        row: {
          backgroundColor: "#16171a",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#131111",
          },
          
          fontFamily: "Montserrat",
        },
        pagination: {
          "& .MuiPaginationItem-root": {
            color: "gold",
          },
        },
      });
    
      const classes = useStyles();
      const darkTheme = createTheme({
        palette: {
          primary: {
            main: "#fff",
          },
          type: "dark",
        },
      });
      const[resd,setResd]=useState([]);
      const callApi=()=>{
           fetch(`http://localhost:8080/exchange?bcurrency=0xdac17f958d2ee523a2206206994597c13d831ec7`).then((resd)=>resd.json().then(re=>{setResd(re)
  console.log(resd);    
      }))
      }
  
      useEffect(() => {
          callApi()
      }, [])
      const handleSearch = () => {
        return coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search) ||
            coin.symbol.toLowerCase().includes(search)
        );
      };
      const handleSearches=()=>{
        return search;
      }
  return (
    // <div className="col-lg-6">
      <ThemeProvider theme={darkTheme}>
    {/* <Paper className={classes.paper}> */}
      {/* <Container style={{ textAlign: "center" }}> */}
      {/* <Typography
      variant="h4"
      style={{ color:"white",margin: 18, fontFamily: "Montserrat" }}
    >
      Cryptocurrency Prices by Market Cap
    </Typography> */}
  {/* <CoinInfos/> */}
    <TextField
      label="Search For a Crypto Currency.."
      variant="outlined"
      style={{ marginBottom: 20, width: "100%",border:"none" }}
      onChange={(e) => setSearch(e.target.value)}
    />
    {resd.map((post,key) =>{
<h1> {post.ba}</h1>
    })}
    {loading ?(
          <LinearProgress style={{ backgroundColor: "gold" }} />
    ):(
      <Table>
          <TableHead style={{ backgroundColor: "#EEBC1D" }}>
      <TableRow>
        {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                <TableCell
                  style={{
                    color: "black",
                    fontWeight: "700",
                  }}
                  key={head}
                  align={head === "Coin" ? "" : "right"}
                >
                  {head}
                </TableCell>
              ))}
      </TableRow>
          </TableHead>
          
          <TableBody>
            {handleSearch()
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((row) => {
                const profit = row.price_change_percentage_24h > 0;
                return (
                  <TableRow
                    // onClick={() => navigate(`/coins/${row.id}`)}
                    className={classes.row}
                    key={row.name}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{
                        display: "flex",
                        gap: 15,
                      }}
                    >
                      <img
                        src={row?.image}
                        alt={row.name}
                        height="50"
                        style={{ marginBottom: 10 }}
                      />
                      <div
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontSize: 22,
                          }}
                        >
                          {row.symbol}
                        </span>
                        <span style={{ color: "darkgrey" }}>
                          {row.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell align="right">
                      {symbol}{" "}
                      {numberWithCommas(row.current_price.toFixed(2))}
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                        fontWeight: 500,
                      }}
                    >
                      {profit && "+"}
                      {row.price_change_percentage_24h.toFixed(2)}%
                    </TableCell>
                    <TableCell align="right">
                      {symbol}{" "}
                      {numberWithCommas(
                        row.market_cap.toString().slice(0, -6)
                      )}
                      M
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
      </Table>
    )}
    <Pagination
      count={(handleSearch()?.length / 10).toFixed(0)}
      style={{
        padding: 20,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
      classes={{ ul: classes.pagination }}
      onChange={(_, value) => {
        setPage(value);
        window.scroll(0, 450);
      }}
    />
      {/* </Container> */}
      {/* </Paper> */}
      </ThemeProvider>
    // </div>
  )
}
