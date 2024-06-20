

const Tablebody = ({transaction}) => {
  return (
    <div className="h-auto ">
        <tbody className="h-auto ">
          {
            transaction  && (
                transaction.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="py-2 px-4 border-b">{transaction.id}</td>
                      <td className="py-2 px-4 border-b">{transaction.title}</td>
                      <td className="py-2 px-4 border-b">{transaction.price}</td>
                      <td className="py-2 px-4 border-b">{transaction.description}</td>
                      <td className="py-2 px-4 border-b">{transaction.category}</td>
                      <td className="py-2 px-4 border-b">{transaction.sold ? 'True' : 'false'}</td>
                      <td className="w-auto h-auto"> 
                        <img 
                          src={transaction.image}
                        />
                      </td>
                    </tr>
                  ))
            )
          }            
        </tbody>
    </div>
  )
}

export default Tablebody