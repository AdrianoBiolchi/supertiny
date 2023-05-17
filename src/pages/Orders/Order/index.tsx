import React, { useEffect, useState, useRef } from 'react'

import ReactToPrint from 'react-to-print'

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import { useParams } from 'react-router-dom'

import { api } from '../../../lib/axios'
import { OrderContainer, OrderList, PrintButton } from './styles'

const Label: React.FC<{ item: any }> = ({ item }) => (
  <div
    style={{ 
          width: '30mm', 
          height: '15mm', 
          border: '1px solid black', 
          margin: '1mm', 
          padding: '1mm', 
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
  >
    <p style={{ fontSize: '9px', color: '#000' }}>
      Cód: <b>{item.item.codigo}</b>
    </p>
    <p style={{ fontSize: '9px', color: '#000' }}>{item.item.descricao}</p>
    <p style={{ fontSize: '9px', color: '#000' }}>QTD:{item.item.quantidade}</p>
  </div>
)

pdfMake.vfs = pdfFonts.pdfMake.vfs;

interface Item {
  item :{
    id: string;
    codigo: string;
    descricao: string;
    quantidade: string;
  }
}



const LabelPrinting: React.FC = () => {
  const { id } = useParams()
  const [items, setItems] = useState<Item[]>([])
  const printRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchItems = async () => {
      const response = await api.get<Item[]>(`/vendas/${id}`)
      const { itens } = response.data
      setItems(itens)
    }

    fetchItems()
  }, [id])
 
  
  const createPDF = () => {
    let content = [];
   
  
    for (let i = 0; i < items.length; i += 3) {
      const firstItem = items[i] ? `${items[i].item.codigo}\n${items[i].item.descricao}\n${items[i].item.quantidade}` : '';
      const secondItem = items[i+1] ? `${items[i+1].item.codigo}\n${items[i+1].item.descricao}\n${items[i+1].item.quantidade}` : '';
      const thirdItem = items[i+2] ? `${items[i+2].item.codigo}\n${items[i+2].item.descricao}\n${items[i+2].item.quantidade}` : '';
      
      content.push({
        table: {
          widths: ['*', '*', '*'],
          body: [
            [
              { text: firstItem, style: 'labelStyle' },
              { text: secondItem, style: 'labelStyle' },
              { text: thirdItem, style: 'labelStyle' }
            ],
          ]
        },
        layout: 'lightHorizontalLines',
        margin: [0, 5, 0, 5]
      });
    }

    const docDefinition = {
      pageSize: { width: 100, height: 'auto' },
      pageMargins: [ 5, 5, 5, 5 ],
      content,
      styles: {
        labelStyle: {
          fontSize: 8,
          alignment: 'justify',
          margin: [5, 5, 5, 5],
        },
      },
    };
  
    pdfMake.createPdf(docDefinition).open();
  };

  return (
    <OrderContainer>
      <OrderList>
        <div style={{ display: 'none' }}>
          <div
            ref={printRef}
            style={{  width: '100mm', display: 'flex', flexWrap: 'wrap',  }}
          >
            {items.map((item) => (
              <Label key={item.id} item={item} />
            ))}
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>
                {/* <ReactToPrint 
                  trigger={() =>
                    isLoading === true ? (
                      <PrintButton>Gerando...</PrintButton>
                    ) : (
                      <PrintButton>Imprimir etiquetas</PrintButton>
                    )
                  }
                  content={() => printRef.current}
                /> */}
                 <PrintButton onClick={createPDF}>Imprimir etiquetas</PrintButton>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((i) => (
              <tr key={i.id}>
                <td>{i.item.codigo}</td>
                <td>{i.item.descricao}</td>
                <td align="center">{i.item.quantidade}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </OrderList>
    </OrderContainer>
  )
}

export default LabelPrinting
