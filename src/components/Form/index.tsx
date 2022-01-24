import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box } from '../../layout/Box'
import { StyleForm, Modal } from './styles'

interface IForm {
  name: string,
  cpf: string,
  cel: string,
  email: string,
  cep: string,
  address: string,
  city: string,
  state: string
}

export default function Form () {
  const { register, handleSubmit, formState: { errors } } = useForm<IForm>()
  const [modal, setModal] = useState(false)
  const [name, setName] = useState('')

  const onSubmit = (data: any) => {
    setName(data.name)
    setModal(!modal)
  }

  return (
    <>
      <Modal
        isOpen={modal}
        className="modal"
        onClick={(event) => {
          // @ts-ignore
          const isSafeArea = event.target.closest(
            '[data-modal-safe-area="true"]'
          )

          if (!isSafeArea) {
            setModal(!modal)
          }
        }}
      >
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          width='400px'
          padding='20px'
          backgroundColor='white'
          onClick={() => setModal(true)}
        >
          <span><h3>Obrigado {name}</h3></span>
        </Box>
      </Modal>

      <StyleForm onSubmit={handleSubmit(onSubmit)}>
        <input
          className='name'
          placeholder='Nome Completo'
          {...register(
            'name', {
              required: true,
              maxLength: 160,
              pattern: /^[A-Za-z]+$/i
            })
          }
        />
          <p>{errors.name?.message}</p>

        <Box
          display={{
            sm: 'flex',
            xs: 'block'
          }}
          margin='20px 0'
          width='100%'
          justifyContent='space-between'
        >
          <input
            className='cpf'
            placeholder='CPF'
            {...register(
              'cpf', {
                required: true,
                maxLength: 14,
                pattern: /^[0-9]+$/i
              })
            }
          />
            <p>{errors.cpf?.message}</p>

          <input
            className='cel'
            placeholder='Celular'
            {...register(
              'cel', {
                required: true,
                maxLength: 12,
                pattern: /^[0-9]+$/i
              })
            }
          />
            <p>{errors.cel?.message}</p>
        </Box>

        <input
          className='email'
          placeholder='E-mail'
          {...register(
            'email', {
              required: true,
              maxLength: 160,
              pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
            })
          }
        />
          <p>{errors.email?.message}</p>

        <Box
          display={{
            sm: 'flex',
            xs: 'block'
          }}
          margin={{
            sm: '20px 0',
            xs: 0
          }}
          width='100%'
          justifyContent='space-between'
        >
          <input
            className='cep'
            placeholder='CEP'
            {...register(
              'cep', {
                required: true,
                maxLength: 12,
                pattern: /^[0-9]+$/i
              })
            }
          />
            <p>{errors.cep?.message}</p>

          <input
            className='address'
            placeholder='Endereço'
            {...register(
              'address', {
                required: true,
                maxLength: 12,
                pattern: /^[0-9]+$/i
              })
            }
          />
            <p>{errors.address?.message}</p>
        </Box>

        <Box
          display={{
            sm: 'flex',
            xs: 0
          }}
          margin={{
            sm: '20px 0',
            xs: 0
          }}
          width='100%'
          justifyContent='space-between'
        >
          <input
            className='city'
            placeholder='Cidade'
            {...register(
              'city', {
                required: true,
                maxLength: 12,
                pattern: /^[A-Za-z]+$/i
              })
            }
          />
            <p>{errors.city?.message}</p>

          <input
            className='state'
            placeholder='Estado'
            {...register(
              'state', {
                required: true,
                maxLength: 12,
                pattern: /^[A-Za-z]+$/i
              })
            }
          />
            <p>{errors.state?.message}</p>
        </Box>

        <button
          type='submit'
        >
          Confirmar
        </button>
      </StyleForm>
    </>
  )
}
