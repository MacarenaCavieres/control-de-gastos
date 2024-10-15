# Control de Gastos

Esta aplicación te permite gestionar tu presupuesto y llevar un control de tus gastos de forma sencilla. Puedes agregar un presupuesto, registrar gastos por categoría, filtrar gastos, y realizar un seguimiento del estado de tus finanzas a través de una interfaz gráfica amigable.

Puedes ver el proyecto [aquí](https://macarenacavieres.github.io/control-de-gastos/)

## Características

- **Registrar presupuesto**: Inicia con la definición de un presupuesto inicial para tus gastos.
- **Agregar gastos**: Registra nuevos gastos indicando el nombre, monto, categoría y fecha del gasto.
- **Filtrar por categoría**: Visualiza tus gastos filtrándolos por diferentes categorías.
- **Visualización del progreso**: Muestra un gráfico circular del porcentaje gastado respecto al presupuesto total.
- **Guardar datos**: Los datos del presupuesto y los gastos se almacenan en el localStorage para mantener la información entre sesiones.
- **Editar y eliminar gastos**: Permite modificar o eliminar gastos previamente registrados.
- **Resetear la aplicación**: Opción para reiniciar todos los datos de presupuesto y gastos.

## Tecnologías utilizadas

- **React**: Biblioteca para la creación de interfaces de usuario.
- **Tailwind CSS**: Framework de utilidades CSS para estilizar la aplicación.
- **React Circular Progressbar**: Componente para la visualización gráfica del progreso del presupuesto.
- **React Date Picker**: Componente para la selección de fechas.
- **LocalStorage**: Almacenamiento de los datos localmente en el navegador.

## Instalación

Sigue estos pasos para instalar y ejecutar la aplicación localmente:

1. Clona el repositorio:
```bash
git clone https://github.com/MacarenaCavieres/control-de-gastos.git
```
2. Navega al directorio del proyecto:
```bash
cd control-de-gastos
```
3. Instala las dependencias:
```bash
npm install
```
3. Inicia la aplicación:
```bash
npm start
```

## Uso
1. Ingresar presupuesto: Al iniciar la aplicación, se te pedirá que ingreses tu presupuesto total.
2. Agregar gastos: Una vez definido el presupuesto, puedes agregar nuevos gastos indicando el nombre, la cantidad, la categoría y la fecha del gasto.
3. Filtrar gastos: Puedes filtrar los gastos por categoría usando el filtro en la parte superior de la lista de gastos.
4. Visualizar progreso: La aplicación mostrará un gráfico con el porcentaje de presupuesto gastado.
5. Editar y eliminar gastos: Puedes arrastrar un gasto para editarlo o eliminarlo.
6. Resetear la aplicación: Si deseas comenzar de nuevo, puedes usar el botón "Resetear App" para borrar todos los datos.

## Estructura del Proyecto
- components: Contiene los componentes principales de la aplicación como el formulario de presupuesto, el listado de gastos, el formulario de gastos, entre otros.
- hooks: Contiene el hook personalizado useBudget para manejar el estado global del presupuesto y los gastos.
- data: Incluye las categorías de gastos disponibles.
- helpers: Funciones auxiliares como formatCurrency para dar formato a los montos.

## Desarrollo

Desarrollado por [Mcavieres](https://www.linkedin.com/in/macarena-cavieres-rubio/)