const confirmMsg = `I agree to not discriminate based on content.`
const noDiscriminate = url => confirm(confirmMsg) && open( `${url}` )
