import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
// type AddPrdProps = {
//     name: string,
//     onAdd: (product: TypeInp) => void
// };
// type TypeInp = {
//     name: string,
//     price: number
// }
// const AddProduct = (props: AddPrdProps) => {
//     const { register, handleSubmit, formState: { errors } } = useForm<TypeInp>(); //1
//     const navigate = useNavigate();
//     const onSubmit: SubmitHandler<TypeInp> = data => { //3
//         props.onAdd(data)
//         navigate("/admin/products")
//     }
//     return ( //2
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input type="text" placeholder='Ten san pham' {...register('name')} />
//             <input type="number" placeholder='Gia san pham' {...register('price')} />
//             <button>Add</button>
//         </form>
//     )
// }
// export default AddProduct


type ProductAddProps = {
    // name: string,
    onAdd: (product: TypeInputs) => void
};
type TypeInputs = {
    name: string,
    price: number
}

const AddProduct = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = data => {
        props.onAdd(data);
        navigate("/admin/products")

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* {props.name} */}
            <input type="text" placeholder='Ten san pham' {...register('name')} />
            <input type="number" placeholder='Gia san pham' {...register('price')} />
            <button>Add</button>
        </form>
    )
}
export default AddProduct