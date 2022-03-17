<template>
	<div class="container my-5">
		<div class="row justify-content-center">
			<div class="col-8">
				<router-link
					:to="{ name: 'transaction.create' }"
					class="btn btn-primary btn-sm rounded shadow mb-3"
				>
					Add
				</router-link>

				<div class="card rounded shadow">
					<div class="card-header">
						<h5 class="card-title">Transactions List</h5>
					</div>
					<div class="card-body">
						<table class="table">
							<thead>
								<tr>
									<th>Title</th>
									<th>Amount</th>
									<th>Type</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								<tr
									v-for="(transaction, index) in transactions.data"
									:key="index"
								>
									<td>{{ transaction.title }}</td>
									<td>{{ transaction.amount }}</td>
									<td>{{ transaction.type }}</td>
									<td>
										<div class="btn-group">
											<router-link
												:to="{
													name: 'transaction.edit',
													params: { id: transaction.id },
												}"
												class="btn btn-sm btn-outline-info me-3 rounded"
											>
												Edit
											</router-link>
											<button class="btn btn-sm btn-outline-danger rounded">
												Delete
											</button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
	setup() {
		// Reactive State
		let transactions = ref([]);
		onMounted(() => {
			// Get data from api endpoint
			axios
				.get("http://127.0.0.1:8000/api/transaction")
				.then((result) => {
					transactions.value = result.data;
				})
				.catch((err) => {
					console.log(err.response);
				});
		});

		return {
			transactions,
		};
	},
};
</script>

<style></style>
