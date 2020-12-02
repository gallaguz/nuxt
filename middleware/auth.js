export default function ({ store, redirect }) {
   if (!store.getters.hasToken) {
      redirect('/login?message=not_authorized');
   }
}
