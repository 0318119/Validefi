import React from 'react';
import '../css/Live_Pairs.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from '../components/Sidebar'
import Danger_icon from '../images/alert.png'
import Plus_icon from '../images/plus_icon.png'
import Lock_icon from '../images/lock_icon.png'
import Cube_boxes_icon from '../images/cube_boxes_icon.png'
import Money_icon from '../images/money_icon.png'
import Uniswap_icon from '../images/uniswap_icon.png'
import Etherscan_icon from '../images/etherscan_icon.png'
import Unicrypt_v3_icon from '../images/unicrypt_v3_icon.svg'
import Team_bright_icon from '../images/bright_icon.png'
import Binoculars_icon from '../images/Binoculars_icon.png'

const useSortableData = (items, config = true) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    // if (sortConfig === 'ascending') {
    //   sortableItems.sort((a, b) => {
    //     if (a[sortConfig.key] < b[sortConfig.key]) {
    //       return sortConfig.direction === 'ascending' ? -1 : 1;
    //     }
    //     if (a[sortConfig.key] > b[sortConfig.key]) {
    //       return sortConfig.direction === 'ascending' ? 1 : -1;
    //     }
    //     return 0;
    //   });
    // }
    sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
      <div className='container-fluid'>

        <div className='row'>
          <div className="col-lg-12">
            <div className='fliters_page_banner'></div>
          </div>
        </div>

        <div className='row'>
           <div className='col-lg-12'>
             <div className='pairs_explorer'>
                 
                <table>
                {/* <caption>Products</caption>*/}

                <thead>
                    <tr>
                    <th>
                        <button
                        type="button"
                        onClick={() => requestSort('Pair')}
                        className={getClassNamesFor('Pair')}
                        >
                        Pair info
                        </button>
                    </th>
                    <th>
                        <button
                        type="button"
                        onClick={() => requestSort('Listed')}
                        className={getClassNamesFor('Listed')}
                        >
                        Listed Since
                        </button>
                    </th>
                    <th>
                        <button
                        type="button"
                        onClick={() => requestSort('TokenPriceUsD')}
                        className={getClassNamesFor('TokenPriceUsD')}
                        >
                        Token Price USD
                        </button>
                    </th>

                    <th>
                        <button
                        type="button"
                        onClick={() => requestSort('InitialLiquidity')}
                        className={getClassNamesFor('InitialLiquidity')}
                        >
                        Initial Liquidity
                        </button>
                    </th>

                    <th>
                        <button
                        type="button"
                        onClick={() => requestSort('TotalLiquidity')}
                        className={getClassNamesFor('TotalLiquidity')}
                        >
                        Total Liquidity
                        </button>
                    </th>

                    <th>
                        <button
                        type="button"
                        onClick={() => requestSort('PoolAmount')}
                        className={getClassNamesFor('PoolAmount')}
                        >
                        Pool Amount
                        </button>
                    </th>

                    <th>
                        <button
                        type="button"
                        onClick={() => requestSort('PoolVariation')}
                        className={getClassNamesFor('PoolVariation')}
                        >
                        Pool Variation
                        </button>
                    </th>

                    <th>
                        <button
                        type="button"
                        onClick={() => requestSort('PoolRemaining')}
                        className={getClassNamesFor('PoolRemaining')}
                        >
                        Pool Remaining
                        </button>
                    </th>

                    <th>
                        <button
                        type="button"
                        onClick={() => requestSort('')}
                        className={getClassNamesFor('')}
                        >
                        Contract
                        </button>
                    </th>

                    <th>
                        <button
                        type="button"
                        onClick={() => requestSort('')}
                        className={getClassNamesFor('')}
                        >
                        Actions
                        </button>
                    </th>

                    </tr>

                </thead>

                <tbody>
                    {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.Pair}</td>
                        <td>{item.Listed}</td>
                        <td>${item.TokenPriceUsD}</td>
                        <td>{item.InitialLiquidity}</td>
                        <td>{item.TotalLiquidity}</td>
                        <td>{item.PoolAmount}</td>
                        <td> <a className="PoolVariation">{item.PoolVariation}</a> </td>
                        <td>{item.PoolRemaining}</td>
                        <td className='denger_icon'> <img src={Danger_icon} /> </td>
                        <td className='d-none'>
                          <div className='icon_box'>
                             <img src={Plus_icon}/>
                             <img src={Lock_icon}/>
                             <img src={Cube_boxes_icon}/>
                             <img src={Money_icon}/>
                          </div>
                        </td>
                        <td>
                          <div className='icon_box_action'>
                             <img src={Uniswap_icon}/>
                             <img src={Etherscan_icon}/>
                             <img src={Unicrypt_v3_icon}/>
                             <img src={Team_bright_icon}/>
                             <img src={Binoculars_icon}/>
                          </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
               </table>
             
             </div>
           </div>
        </div>

      </div>
  );
};

export default function Live_Pairs() {
  return (
    <div className="App">
     <Sidebar />
      <ProductTable
        products={[
          { 
            id: 1, Pair: 'WBNB/INFI 0x56036b9e99', Listed : '2 m 44 s', TokenPriceUsD: '$0.0000000000008265', InitialLiquidity : '2022-04-30 02:15:49',
            TotalLiquidity : '$0.07', PoolAmount : '0.5 BNB', PoolVariation : '-99.98%',  PoolRemaining : '0.00009 BNB'
          },
          { 
            id: 2, Pair: 'WBNB/INFI 0x56036b9e91', Listed : '2 m 40 s', TokenPriceUsD: '$0.000000000000010465', InitialLiquidity : '2022-05-30 02:15:49',
            TotalLiquidity : '$0.08', PoolAmount : '0.5 ETH', PoolVariation : '-99.95%',  PoolRemaining : '0.00009 ETH'
          },
          { 
            id: 3, Pair: 'WBNB/INFI 0x56036b9e99', Listed : '2 m 44 s', TokenPriceUsD: '$0.0000000000008065', InitialLiquidity : '2022-05-30 02:15:49',
            TotalLiquidity : '$0.09', PoolAmount : '0.5 AVA', PoolVariation : '-99.92%',  PoolRemaining : '0.00009 AVA'
          },
          { 
            id: 3, Pair: 'WBNB/INFI 0x56036b9e99', Listed : '2 m 44 s', TokenPriceUsD: '$0.0000000000008065', InitialLiquidity : '2022-05-30 02:15:49',
            TotalLiquidity : '$0.09', PoolAmount : '0.5 AVA', PoolVariation : '-99.92%',  PoolRemaining : '0.00009 AVA'
          },
          { 
            id: 3, Pair: 'WBNB/INFI 0x56036b9e99', Listed : '2 m 44 s', TokenPriceUsD: '$0.0000000000008065', InitialLiquidity : '2022-05-30 02:15:49',
            TotalLiquidity : '$0.09', PoolAmount : '0.5 AVA', PoolVariation : '-99.92%',  PoolRemaining : '0.00009 AVA'
          },
          { 
            id: 3, Pair: 'WBNB/INFI 0x56036b9e99', Listed : '2 m 44 s', TokenPriceUsD: '$0.0000000000008065', InitialLiquidity : '2022-05-30 02:15:49',
            TotalLiquidity : '$0.09', PoolAmount : '0.5 AVA', PoolVariation : '-99.92%',  PoolRemaining : '0.00009 AVA'
          },
          { 
            id: 3, Pair: 'WBNB/INFI 0x56036b9e99', Listed : '2 m 44 s', TokenPriceUsD: '$0.0000000000008065', InitialLiquidity : '2022-05-30 02:15:49',
            TotalLiquidity : '$0.09', PoolAmount : '0.5 AVA', PoolVariation : '-99.92%',  PoolRemaining : '0.00009 AVA'
          },
          { 
            id: 3, Pair: 'WBNB/INFI 0x56036b9e99', Listed : '2 m 44 s', TokenPriceUsD: '$0.0000000000008065', InitialLiquidity : '2022-05-30 02:15:49',
            TotalLiquidity : '$0.09', PoolAmount : '0.5 AVA', PoolVariation : '-99.92%',  PoolRemaining : '0.00009 AVA'
          },
          { 
            id: 3, Pair: 'WBNB/INFI 0x56036b9e99', Listed : '2 m 44 s', TokenPriceUsD: '$0.0000000000008065', InitialLiquidity : '2022-05-30 02:15:49',
            TotalLiquidity : '$0.09', PoolAmount : '0.5 AVA', PoolVariation : '-99.92%',  PoolRemaining : '0.00009 AVA'
          },
        ]}
      />
    </div>
  );
}
