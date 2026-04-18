const GSHEET_JSONP_URL = 'https://docs.google.com/spreadsheets/d/13E8H4qd3JFf7CPTc7hA0MUVwQACGNV-iVF_WV9FW39c/gviz/tq?tqx=out:json;responseHandler:gvizCallback&gid=0';

// Branding Assets (From Zoho project references)
const ATVIAN_SEAL = 'data:image/png;base64,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eAn7BPl0m9fG/zW9XvD+3GUPzN79F8f+MvA986e6XTPV8Zf9mZz8S8xS5C/39uD38Z/Bn/Z8u8ZlR6S90K5XVAu5+09IumUo9W9vW1K19fG1Y7YlY666878/m6/8YhG97jG0YOfM60mEue275v7z5v7/X9/37o370S6797pZZ/Ua9pT+fRms9O0ZfTn9f896o46vO6S06StpXf68qSUnofkZ80R1Y/y6GfPInZp8R70XofvUf73H1L/877v7W0R9/T8e7I9zbtO+fO0P+Tf9O/9/0XvX7iXmY7P0P+T2P069v70D/690u5+Uf175pP0b+l93u/p63h90vL9fTvmvfc0/v27/v1/P8f0vP/e9v5/x83479Ufiv/Xm6Z196S8Wl5689M6+X97z69e///VvXPqP/e979Vv6X3ef++7/vX3u6V1r/zGv/9ovnS/wAof3F8D3N/15vX18G9ff/f85uX/3/Gf1F8T8v37u7n6v7v+Zff569q/9+y80O9UsqO6H9D9GjU70ntHuvnS//f8Vf789p6Z8Vv6X/u//XPrd5/eXvB//U++nfdq6z/P/mOfB+xn9fO+D/5O++jffr+F/Zf9m///9vO/37/8/5/H/n7F/2f5vfn7O8l3U/KOfOfS8v36v90P6P/fP/zO7XvXOfnO6Xf73RPlTqOf7LOf+H/Zf/unv6X/+f+z/+f7vV7m//t3y97rvL9O++Vd//ZqZaf0P+07P/vH5H3P8/93fM7pffp37X/D/VPO/Z1Uv/pP+90v6M/q52vfe7PfP+/0P+vU7rXvunfv6O3S99z7/f8O+v5XmY7P079//P/+5+jff90v6P/rvX/v/+7/vXP+H/8h97nPfOdr33vz2r5H9XfP1l653uV917f/9f9P989vVL8nN6//f9v6Of8H77X/rf597vVf69u6f3eH/W//p7+3fO7ne8+vX773+vXf6/8hv2f/p33O/X7066nfs7u/tD7pffp3/XO87ue75S/p/vN632u7nO6z7v5fK++Dnd8Zet0vffvO/Jv+f/fvW8v+3n9/89+zf/7OfpnuY7uU7rO+N/+3fOdrXvunf7/ov9TvdLoXv39X//1P+v57vevUjr6n3S97re8/79XWf9fuv+qf96rvHe+97un/9e/p7f7uXv7f2/uL/+v7/+vUjrX9L90vef3++9/Vvupe6X50v9Pf5f+NfNnuQ7ue//Xv+u+p/vN65/Tvd/pf6e09N97uXv/f/f96557vffrO+Xve/Uv+t+D+/XPD+7V93v/P/T///39Xut+d7/T7XOf//uX176P0dMvVl4H1P97Xf8/uv+//1H+9z/7df9pOfpXe+/e8v/f6fXurvfOdr/+XvN+7/N+90615vvU//tH/Vve/Tve/f7/9u96v576uXv1P/9vP/9uv/v/S/o//1+hfr+f7n9fP/vP6vXulvD///57uFfV/vN79f6uXa//+veZnu979Y/7t6uVfUv93f9T9P97t6u9X6Od7f/Rnv9vP9v9n+/f1Ovebnu/96u1frvfHe6p50vtH+/uXul+dL7R/mU7uV7pe6Xf//v/6/6XvU8//m9fR+9f6n++/p7V7XzO9e/X+/UfrvVev1X5/Vvd69u9K53uX3uXr/R7z/vXuvffV0vtfX/vfVf///pX/dXuU9/f//Zl/7fUjpYAAAAASUVORK5CYII=';

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

let receiptsData = [];

function fetchData() {
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';
    
    // Define the global callback function exactly as named in responseHandler
    window.gvizCallback = function(data) {
        try {
            if (data.status === 'error') {
                throw new Error(data.errors[0].message);
            }
            
            // Extract column labels
            const cols = data.table.cols.map(c => c.label);
            
            // Extract rows and map them into objects
            const rows = data.table.rows.map(r => {
                const rowData = {};
                cols.forEach((colName, i) => {
                    if (!colName) return;
                    const cell = (r.c && r.c[i]) ? r.c[i] : null;
                    // Prefer formatted string (f) over raw value (v) for display purposes
                    rowData[colName] = (cell && cell.v !== null && cell.v !== undefined) 
                        ? (cell.f ? String(cell.f) : String(cell.v)) 
                        : "";
                });
                return rowData;
            });
            
            loader.style.display = 'none';
            // Filter out empty receipt rows
            receiptsData = rows.filter(row => row['Receipt No']);
            renderTable(receiptsData);
            document.getElementById('total-count').innerText = receiptsData.length;
        } catch (err) {
            console.error('Data Parse error:', err);
            loader.innerHTML = `<p style="color: #ef4444;">Data processing error: ${err.message}</p>`;
        }
    };

    // Inject JSONP script tag to bypass all CORS limitations
    const script = document.createElement('script');
    script.src = GSHEET_JSONP_URL + '&_=' + new Date().getTime(); // bypass cache
    script.onerror = function() {
        console.error('Script load error');
        loader.innerHTML = `<p style="color: #ef4444; padding: 0 20px; text-align: center;">Network Error: Failed to fetch Google Sheets data.<br><small>If you see this, please check your internet connection or ad-blocker.</small></p>`;
    };
    document.body.appendChild(script);
}

function renderTable(data) {
    const tbody = document.getElementById('data-rows');
    tbody.innerHTML = '';

    data.forEach((row) => {
        const globalIndex = receiptsData.indexOf(row);
        const { name, ivrs } = parseCustomerName(row['Customer Name']);
        
        const tr = document.createElement('tr');

        // Safe text population to avoid XSS
        const td = (val) => {
            const span = document.createElement('span');
            span.textContent = val;
            return span.outerHTML;
        };

        tr.innerHTML = `
            <td><input type="checkbox" class="row-checkbox" value="${globalIndex}" onclick="updateBulkBtn()"></td>
            <td><strong>${td(row['Receipt No'])}</strong></td>
            <td>${td(row['Payment Receiving Date'])}</td>
            <td>${td(name)}</td>
            <td><code>${td(ivrs)}</code></td>
            <td>₹${td(row['Amount'])}</td>
            <td class="text-right action-cell">
                <button class="view-btn" onclick="viewReceipt(${globalIndex})">View</button>
                <button class="download-btn" onclick="generateSinglePDF(${globalIndex})">Download</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function parseCustomerName(fullName) {
    if (!fullName) return { name: 'Unknown', ivrs: '-' };
    const parts = fullName.split(' - ');
    return {
        name: parts[0] || 'Unknown',
        ivrs: parts[1] || '-'
    };
}

function filterData() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = receiptsData.filter(row => {
        return row['Customer Name'].toLowerCase().includes(query) || 
               row['Receipt No'].toLowerCase().includes(query);
    });
    renderTable(filtered);
}

function toggleSelectAll() {
    const master = document.getElementById('select-all');
    const checks = document.querySelectorAll('.row-checkbox');
    checks.forEach(c => c.checked = master.checked);
    updateBulkBtn();
}

function updateBulkBtn() {
    const checked = document.querySelectorAll('.row-checkbox:checked');
    const btn = document.getElementById('bulk-btn');
    if (checked.length > 0) {
        btn.style.display = 'block';
        btn.innerText = `Download Selected (${checked.length})`;
    } else {
        btn.style.display = 'none';
    }
}

async function generateSinglePDF(index, btn) {
    try {
        const row = receiptsData[index];
        if (!row) throw new Error("Row data not found");

        // btn is passed explicitly; fall back to event.target for direct button clicks
        if (!btn && event && event.target) btn = event.target;
        const originalText = btn ? btn.innerText : '';
        if (btn) { btn.innerText = 'Creating...'; btn.disabled = true; }

        await prepareTemplate(row);

        const element = document.getElementById('receipt-template');
        const opt = {
            margin: [2, 5, 5, 5],
            filename: `Receipt_${row['Receipt No']}_${row['Customer Name'].split(' ')[0]}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 3, useCORS: true, allowTaint: true, logging: false },
            jsPDF: { unit: 'mm', format: 'a5', orientation: 'portrait' }
        };

        await html2pdf().set(opt).from(element).save();

        if (btn) { btn.innerText = originalText; btn.disabled = false; }
    } catch (err) {
        console.error('PDF Generation Error:', err);
        alert('Error generating PDF: ' + err.message);
    }
}

async function prepareTemplate(row) {
    const { name, ivrs } = parseCustomerName(row['Customer Name']);

    document.getElementById('pdf-receipt-no').innerText = row['Receipt No'] || '-';
    document.getElementById('pdf-date').innerText = row['Payment Receiving Date'] || '-';
    document.getElementById('pdf-cust-name').innerText = name || '-';
    document.getElementById('pdf-mobile').innerText = row['Mobile'] || '-';
    document.getElementById('pdf-address').innerText = row['Address'] || '-';
    document.getElementById('pdf-ivrs').innerText = ivrs || '-';
    document.getElementById('pdf-mode').innerText = row['Mode of Payment'] || '-';
    document.getElementById('pdf-amount').innerText = '₹' + (row['Amount'] || '0');
    document.getElementById('pdf-ack-amount').innerText = '₹' + (row['Amount'] || '0');

    const stampImg = document.getElementById('pdf-stamp');
    stampImg.src = 'seal.jpg?' + Date.now(); // Add cache buster

    // Wait for all images to be ready before PDF capture
    const images = document.querySelectorAll('#receipt-template img');
    const promises = Array.from(images).map(img => {
        return new Promise((resolve) => {
            if (img.complete && img.naturalWidth > 0) {
                resolve();
            } else {
                const onLoad = () => {
                    img.removeEventListener('load', onLoad);
                    img.removeEventListener('error', onError);
                    resolve();
                };
                const onError = () => {
                    console.warn('Image failed to load:', img.src);
                    img.removeEventListener('load', onLoad);
                    img.removeEventListener('error', onError);
                    resolve();
                };
                img.addEventListener('load', onLoad);
                img.addEventListener('error', onError);
            }
        });
    });
    await Promise.all(promises);
    // Give browser a frame to paint images before html2canvas captures
    await new Promise(r => setTimeout(r, 300));
}

async function handleBulkDownload() {
    const checked = document.querySelectorAll('.row-checkbox:checked');
    const btn = document.getElementById('bulk-btn');
    btn.disabled = true;
    btn.innerText = 'Processing...';

    for(let check of checked) {
        const idx = parseInt(check.value);
        await generateSinglePDF(idx, null);
        // Small delay between downloads to prevent browser blocking
        await new Promise(r => setTimeout(r, 1000));
    }

    btn.disabled = false;
    updateBulkBtn();
}

async function viewReceipt(index) {
    const row = receiptsData[index];
    if (!row) return;

    await prepareTemplate(row);

    // Clone the populated template into the modal
    const source = document.getElementById('receipt-template');
    const clone = source.cloneNode(true);
    clone.removeAttribute('id');
    clone.style.cssText = 'display:block; margin: 0 auto;';

    const body = document.getElementById('modal-preview-body');
    body.innerHTML = '';
    body.appendChild(clone);

    // Wire the Download button to this specific row
    const dlBtn = document.getElementById('modal-download-btn');
    dlBtn.onclick = () => generateSinglePDF(index, dlBtn);

    document.getElementById('preview-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('preview-modal').style.display = 'none';
}
