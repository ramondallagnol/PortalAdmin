import Swal from 'sweetalert2'

function ShowMessageSuccess (message) {
  Swal.fire(
    message,
    '=)',
    'success'
  )
}

function ShowMessageError (message) {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message,
    footer: 'O Sistema gerou uma exceção'
  })
}

export { ShowMessageSuccess, ShowMessageError }
