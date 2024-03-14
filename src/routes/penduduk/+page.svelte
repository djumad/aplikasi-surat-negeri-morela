<script lang="ts">
    import "bootstrap/dist/css/bootstrap.min.css";
    export let data;
    console.log(data)
    const {result} = data;
</script>

<div>
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Nik</th>
                <th>Nama Lengkap</th>
                <th>Alamat</th>
                <th>Role</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {#each result as item , index}    
            <tr>
                <td>{index + 1}</td>
                <td>{item.nik}</td>
                <td>{item.nama}</td>
                <td>{item.alamat}</td>
                <td>{item.role}</td>
                <td>
                    <button class="btn btn-warning">Update</button>
                    <button class="btn btn-danger">Hapus</button>
                </td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>