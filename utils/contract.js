import ContractABI from './Tiktok.json'
import Web3 from 'web3'

export const address = 'your address here'

export const createContract = () => {
  const { ethereum } = window
  if (ethereum) {
    const web3 = new Web3(ethereum)
    return new web3.eth.Contract(ContractABI.abi, address)
  }
}

export const modalStyles = {
  content: {
    height: '480px',
    width: '450px',
    margin: 'auto',
    display: 'flex',
    padding: '0px',
    marginTop: '150px',
    backgroundColor: 'rgb(44, 45, 48, 1)',
  },
  overlay: {
    backgroundColor: 'rgb(0 0 0 / 75%)',
  },
}
