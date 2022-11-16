import { useForm } from "react-hook-form";
import { edadValidator } from "./validators";

const Formulario = () => {
	const {
		register,
		formState: { errors },
		watch,
		handleSubmit,
	} = useForm({
        defaultValues: {
            nombre: "Grover",
            direccion: "Poseidon 666",
            edad: 35,
            telefono: "1233211231",
            email: "grover_the_best@gmail.com",
        }});

	const onSubmit = (data) => {
		console.log(data);
	};

	const incluirTelefono = watch("incluirTelefono");

	return (
		<div>
			<h2>Formulario</h2>
			<p>Nombre: {watch("nombre")}</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>Nombre</label>
					<input
						type="text"
						{...register("nombre", {
							required: true,
							maxLength: 10,
						})}
					/>
					{errors.nombre?.type === "required" && (
						<p>El campo nombre es requerido</p>
					)}
					{errors.nombre?.type === "maxLength" && (
						<p>El campo nombre debe tener menos de diez caracteres</p>
					)}
				</div>
				<div>
					<label>Direccion</label>
					<input type="text" {...register("direccion", { required: true })} />
				</div>
				<div>
					<label>Email</label>
					<input
						type="text"
						{...register("email", {
							pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
						})}
					/>
					{errors.email?.type === "pattern" && (
						<p>El formato del email es incorrecto</p>
					)}
				</div>
				<div>
					<label>Edad</label>
					<input
						type="text"
						{...register("edad", {
							validate: edadValidator,
						})}
					/>
					{errors.edad && <p>La edad debe estar entre 18 y 65 años</p>}
				</div>
				<div>
					<label>Pais</label>
					<select {...register("pais")}>
						<option value="es">España</option>
						<option value="it">Italia</option>
						<option value="fr">Francia</option>
					</select>
				</div>
				<div>
					<label>¿Incluir telefono?</label>
					<input type="checkbox" {...register("incluirTelefono")} />
				</div>
				{incluirTelefono && (
					<div>
						<label>Telefono</label>
						<input type="text" {...register("Telefono")} />
					</div>
				)}
				<input type="submit" value="Enviar" />
			</form>
		</div>
	);
};

export default Formulario;
