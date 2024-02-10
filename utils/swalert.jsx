import swal from "sweetalert2"

const swalert = async (url, tech, desc) => {
    return swal.fire({
        title: `Honda <span>${tech}</span>`,
        html: `<div>
                <video width="100%" height="250" controls>
                    <source src="${url}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <p>${desc}</p>
                </div>`,
        showConfirmButton: false,
        showCloseButton : true,
        background: 'var(--text)',
        customClass: {container: 'swalert'},
        color: 'var(--black)',
    })
}

export default swalert